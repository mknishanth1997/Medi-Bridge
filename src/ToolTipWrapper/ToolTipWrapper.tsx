import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import './ToolTipWrapper.css';
export function TooltipWrapper({ content, children, side = 'top', align = 'center' }) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="TooltipWrapper__content"
            side={side}
            align={align}
            sideOffset={5}
          >
            {content}
            <RadixTooltip.Arrow className="TooltipWrapper__arrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
