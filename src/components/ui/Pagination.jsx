import Button from "./Button";

export default function Pagination({currentPage, totalPages, onPageChange}) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex gap-2">
                <Button
                    variant="secondary"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </Button>

                <Button
                    variant="secondary"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}