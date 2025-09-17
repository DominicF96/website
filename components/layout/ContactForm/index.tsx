"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as i18n from "./i18n";
import { Locale } from "@/i18n.config";
import { Textarea } from "../../ui/textarea";
import { H1, Small } from "../../Typography";
import { CheckIcon, LoaderIcon, XCircleIcon } from "lucide-react";
import { CenteredContainer } from "../../Container";
import { toast } from "sonner";

type Props = {
  locale: Locale;
};

function ContactForm({ locale }: Props) {
  const t = i18n[locale];

  const [isLoading, setLoading] = useState<boolean>(false);
  const [sentMessage, setSentMessage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isLoadingSubscribe, setLoadingSubscribe] = useState<boolean>(false);
  const [subscribeRes, setSubscribeRes] = useState<boolean | undefined>(
    undefined
  );

  const formSchema = z.object({
    firstname: z
      .string()
      .regex(/^[a-zA-Z\s]*$/, t.errors.only_letters)
      .min(2, t.errors.min_2_chars)
      .max(50, t.errors.max_50_chars),
    lastname: z
      .string()
      .regex(/^[a-zA-Z\s]*$/, t.errors.only_letters)
      .min(2, t.errors.min_2_chars)
      .max(50, t.errors.max_50_chars),
    email: z.string().email(t.errors.email_valid).min(5, t.errors.min_5_chars),
    company: z.string().max(50, t.errors.max_50_chars),
    reason: z.string().max(50, t.errors.max_50_chars),
    message: z.string().max(500, t.errors.max_500_chars),
    newsletter: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      reason: "freelance",
      message: "",
      newsletter: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSentMessage(false);
    // if (values.newsletter) {
    //   subscribe(values);
    // }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        locale,
        requested_at: new Date().toISOString(),
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSentMessage(true);
          setError(null);
          form.reset();
          toast.success(t.submit_successful);
          const audio = new Audio("/sounds/success.mp3");
          audio.volume = 0.2;
          audio.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        } else {
          setError("Unable to submit deletion request. Please try again.");
          setSentMessage(false);
          const audio = new Audio("/sounds/error.mp3");
          audio.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setError(
          `Unable to submit deletion request. Please try again., ${err}`
        );
        setSentMessage(false);
        const audio = new Audio("/sounds/error.mp3");
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      })
      .finally(() => setLoading(false));
    setLoading(false);
  }

  const subscribe = async (values: z.infer<typeof formSchema>) => {
    setSubscribeRes(undefined);
    setLoadingSubscribe(true);
    console.log("Subscribing to newsletter", values);
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({
        firstName: values.firstname,
        lastName: values.lastname,
        email: values.email,
        isContactForm: true,
        note: `[CONTACT FORM] User provided the following message: '${values.message}'.`,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          setSubscribeRes(true);
        } else {
          throw new Error("Unable to subscribe to newsletter");
        }
      })
      .catch((err) => {
        console.error(`Unable to subscribe to newsletter, ${err}`);
        setSubscribeRes(false);
      })
      .finally(() => setLoadingSubscribe(false));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      form.handleSubmit(onSubmit)(); // This triggers the form submission programmatically
    }
  };

  return (
    <CenteredContainer>
      <div className="relative flex flex-col md:flex-row justify-evenly gap-8 z-10">
        <H1
          id="contact"
          className="!text-[128px] !line-clamp-none overflow-visible h-fit max-w-[50%] text-primary"
        >
          {t.contact}
        </H1>
        <Form {...form}>
          <form
            onKeyDown={handleKeyPress}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full max-w-[500px]"
          >
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t.firstname.label}
                    <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t.firstname.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t.lastname.label}
                    <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t.lastname.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t.email.label}
                    <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t.email.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.company.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.company.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.reason_select.label}</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t.reason_select.placeholder}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(t.reason_select.options).map((key) => (
                          <SelectItem key={`reason_${key}`} value={key}>
                            {
                              t.reason_select.options[
                                key as keyof typeof t.reason_select.options
                              ]
                            }
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.message.label}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t.message.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0 w-fit cursor-pointer">
                    {t.newsletter.label}
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {error ? (
              <div>
                <Small className="text-destructive font-bold flex items-center">
                  <XCircleIcon height={18} width={18} className="mr-2" />
                  &nbsp;{t.errors.submit}
                </Small>
              </div>
            ) : null}
            {sentMessage ? (
              <div>
                <Small className="text-primary font-bold flex items-center">
                  <CheckIcon height={18} width={18} className="mr-2" />
                  &nbsp;{t.submit_successful}
                </Small>
              </div>
            ) : null}
            {subscribeRes === true ? (
              <div>
                <Small className="text-primary font-bold flex items-center">
                  <CheckIcon height={18} width={18} className="mr-2" />
                  &nbsp;{t.newsletter.tips.success}
                </Small>
              </div>
            ) : null}
            {subscribeRes === false ? (
              <div>
                <Small className="text-destructive font-bold flex items-center">
                  <XCircleIcon height={18} width={18} className="mr-2" />
                  &nbsp;{t.newsletter.tips.error}
                </Small>
              </div>
            ) : null}
            <Button disabled={isLoading || isLoadingSubscribe} type="submit">
              {t.submit}&nbsp;
              {isLoading || isLoadingSubscribe ? (
                <LoaderIcon height={18} width={18} className="animate-spin" />
              ) : null}
            </Button>
          </form>
        </Form>
      </div>
    </CenteredContainer>
  );
}

export default ContactForm;
