
const DiscardChanges = ({ discardProfileChanges, cancelDiscardModal}) => {
    return (
        <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs confirm-dialog ">
            <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
                <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg border border-blue-800">
                    <div class="md:flex items-center">
                        <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                        <i class="bx bx-error text-3xl">
                        &#9888;
                        </i>
                        </div>
                        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p class="font-bold">Warning!</p>
                        <p class="text-sm text-gray-700 mt-1">You will lose all of your changes by discarding this. This action cannot be undone.
                        </p>
                        </div>
                    </div>
                    <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                        <button id="confirm-delete-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-blue-200 text-blue-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                        onClick={discardProfileChanges}
                        >
                            Discard
                        </button>
                        <button id="confirm-cancel-btn" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
                        onClick={cancelDiscardModal}>
                        Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
)}

export default DiscardChanges