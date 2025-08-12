import * as React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './AlertDialogRadix.css';
interface AlertDialogWrapperProps {
  trigger?: React.ReactNode; // element to trigger the dialog (icon, button, whatever)
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function AlertDialogWrapper({
  trigger,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: AlertDialogWrapperProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        {trigger ? trigger : <button className="Button violet">{confirmText}</button>}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">{title}</AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            {description}
          </AlertDialog.Description>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              <button className="Button mauve" onClick={onCancel}>
                {cancelText}
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="Button red"
                onClick={() => {
                  //   onConfirm();
                  oncancel;
                }}
              >
                {confirmText}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
