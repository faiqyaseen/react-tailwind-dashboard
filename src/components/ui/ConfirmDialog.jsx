import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
    open,
    title = "Confirm Action",
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
}) {
    function footer() {
        return (
            <>
                <Button variant="secondary" onClick={onCancel}>{cancelText}</Button>
                <Button variant="danger" onClick={onConfirm}>{confirmText}</Button>
            </>
        )
    }
    
    return (
        <Modal open={open} title={title} onClose={onCancel} footer={footer()}>
            <p className="text-slate-600">{message}</p>
        </Modal>
    );
}

