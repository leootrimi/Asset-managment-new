import { Skeleton } from "@mui/material";

export default function YourWorkSkeleton() {
    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-center p-6 lg:px-8 gap-x-4"
                >
                    <div className="flex items-center gap-x-4">
                        <Skeleton variant="rectangular" width={32} height={32} sx={{ borderRadius: "4px" }} />
                        <Skeleton variant="text" width={80} height={24} />
                        <Skeleton variant="rectangular" width={1} height={32} sx={{ bgcolor: "#d1d5db" }} />
                        <div className="relative">
                            <div className="flex gap-x-1 items-center">
                                <Skeleton variant="text" width={60} height={24} />
                                <Skeleton variant="rectangular" width={12} height={12} />
                            </div>
                        </div>
                        <Skeleton variant="rectangular" width={60} height={32} sx={{ borderRadius: "4px", bgcolor: "#3b82f6" }} />
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Skeleton variant="text" width={60} height={24} />
                    </div>
                    <div className="flex lg:hidden">
                        <Skeleton variant="rectangular" width={24} height={24} sx={{ borderRadius: "4px" }} />
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative isolate px-6 pt-14 lg:px-8">
                <div className="h-screen py-3 bg-gray-5 flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-3/4 p-4 gap-3">
                        <Skeleton variant="text" width={150} height={32} />
                        <Skeleton variant="rectangular" width="100%" height={1} sx={{ bgcolor: "#d1d5db" }} />

                        {/* RecentProjects Placeholder */}
                        <div className="flex flex-row gap-4 overflow-x-auto">
                            {[...Array(3)].map((_, index) => (
                                <Skeleton
                                    key={index}
                                    variant="rectangular"
                                    className="w-[200px] h-full md:w-[250px] md:h-full"
                                    sx={{ borderRadius: "8px", flexShrink: 0 }}
                                />
                            ))}
                        </div>

                        {/* New Project Card */}
                        <div className="w-full h-1/2 rounded-2xl border border-dashed border-gray-400 bg-gray-50 py-6 md:py-0">
                            <div className="flex justify-center items-center h-full">
                                <div className="flex flex-col justify-center items-center w-1/3 gap-5">
                                    <div className="flex gap-2 items-center">
                                        <Skeleton variant="rectangular" width={24} height={24} />
                                        <Skeleton variant="text" width={100} height={28} />
                                    </div>
                                    <Skeleton variant="rectangular" width="100%" height={8} sx={{ borderRadius: "8px" }} />
                                    <Skeleton variant="rectangular" width="50%" height={8} sx={{ borderRadius: "8px" }} />
                                    <Skeleton
                                        variant="rectangular"
                                        width={80}
                                        height={36}
                                        sx={{ borderRadius: "8px", bgcolor: "#1e40af" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ProductCard Sidebar */}
                    <div className="flex-1 flex flex-col items-center gap-4 w-full md:w-1/4 lg:bg-gray-50 md:bg-gray-50 rounded-2xl p-4 md:px-4">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="w-full">
                                <Skeleton variant="rectangular" width="100%" height={120} sx={{ borderRadius: "8px" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}