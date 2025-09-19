import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { LucideIcon } from 'lucide-react';
import * as React from 'react';

export interface IIconLabelAttributeProps {
    Icon: LucideIcon;
    label: string;
    value: string;
}

export function IconLabelAttribute(props: IIconLabelAttributeProps) {
    const { Icon, label, value } = props;
    return (
        <span>
            <Tooltip>
                <TooltipTrigger>
                    <Icon className="inline" size={16} />
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
            </Tooltip>&nbsp;{value}
        </span>
    );
}
