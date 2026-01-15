import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  children: React.ReactNode;
  handleClose: () => void;
  handleSave?: () => void;
  open?: boolean;
  saving?: boolean;
  saveLabel?: string;
  disableSave?: boolean;
}

const Modal: React.FC<Props> = ({
  title,
  children,
  handleClose,
  handleSave,
  open = true,
  saving = false,
  saveLabel = "Save Changes",
  disableSave = false,
}) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={saving}>
            Close
          </Button>
          {handleSave && (
            <Button onClick={handleSave} disabled={saving || disableSave}>
              {saving ? "Saving..." : saveLabel}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
