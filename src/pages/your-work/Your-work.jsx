'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Bars3Icon, PlusIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import RecentProjects from './Components/RecentProjects';
import ProductCard from './Components/ProductCard';
import ProjectModal from './New Project/ProjectModal';
import YourWorkSkeleton from './Loading Skeleton/YourWorkSkeleton';
import { apiRequest } from '../../services/ApiCalls';

export default function YourWork() {
    const { isAuthenticated, isLoading, error, loginWithRedirect, logout, user } = useAuth0();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [project, setProjects] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);


    useEffect(() => {
        async function fetchProjects() {
            try {
                console.log('Fetching projects for user.sub:', user?.sub);
                const response = await apiRequest({ endpoint: `/projects?ownerId=${user?.sub}` });
                console.log('Projects response:', response);
                setProjects(response);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        if (user?.sub) {
            fetchProjects();
        }
    }, [user]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (error) {
        return <div>{error.message}</div>;
    }
    if (isLoading) {
        return <YourWorkSkeleton />;
    }

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-center p-6 lg:px-8 gap-x-4"
                >
                    <div className="flex items-center gap-x-4">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">PrimeNest</div>
                        <div className="w-px h-8 bg-gray-400"></div>
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="flex gap-x-1 items-center cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className="text-sm font-semibold text-gray-900">Projects</div>
                                <ChevronDownIcon
                                    className={`size-3 text-gray-900 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                                    <ul className="py-1">
                                        <li className="px-4 py-2 text-sm text-gray-500">No projects available</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div
                            onClick={() => setShowModal(true)}
                            className="bg-blue-500 px-2 py-1.5 rounded text-white text-sm font-semibold hover:cursor-pointer hover:shadow-md"
                        >
                            Create
                        </div>
                    </div>
                    {!isAuthenticated ? (
                        <div
                            className="hidden lg:flex lg:flex-1 lg:justify-end text-sm/6 font-semibold text-gray-900 cursor-pointer"
                            onClick={() =>
                                loginWithRedirect({ scope: 'openid profile email offline_access' })
                            }
                        >
                            Log in <span aria-hidden="true">→</span>
                        </div>
                    ) : (
                        <div
                            className="hidden lg:flex lg:flex-1 lg:justify-end text-sm/6 font-semibold text-gray-900 cursor-pointer"
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        >
                            Log out <span aria-hidden="true">→</span>
                        </div>
                    )}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </nav>
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="fixed inset-0 z-50 bg-white p-6">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-700"
                            >
                                Close
                            </button>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <div
                                        onClick={() => {
                                            setShowModal(true);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Create
                                    </div>
                                </li>
                                <li>
                                    {!isAuthenticated ? (
                                        <div
                                            className="text-sm font-semibold text-gray-900 cursor-pointer"
                                            onClick={() => {
                                                loginWithRedirect({ scope: 'openid profile email offline_access' });
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            Log in
                                        </div>
                                    ) : (
                                        <div
                                            className="text-sm font-semibold text-gray-900 cursor-pointer"
                                            onClick={() => {
                                                logout({ logoutParams: { returnTo: window.location.origin } });
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            Log out
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>

            <main className="relative isolate px-6 pt-14 lg:px-8">
                <div id="project1" className="h-screen py-3 bg-gray-5 flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-3/4 p-4 gap-3">
                        <h1 className="flex text-xl font-medium">Your Work</h1>
                        <div className="h-px bg-gray-300"></div>
                        <RecentProjects projects={project} />
                        <div className="w-full h-1/2 rounded-2xl hover:shadow-lg hover:cursor-pointer transition-shadow duration-200">
                            <div
                                onClick={() => setShowModal(true)}
                                className="w-full flex justify-center items-center h-full rounded-2xl border border-dashed border-gray-400 bg-gray-50 py-6 md:py-0"
                            >
                                <div className="flex flex-col justify-center items-center w-1/3 gap-5">
                                    <div className="flex gap-2 items-center mr-4">
                                        <PlusIcon className="size-6" />
                                        <h1 className="text-blue-900 text-xl font-semibold m-0">New Project</h1>
                                    </div>
                                    <div className="h-2 rounded-2xl bg-gray-300 w-full"></div>
                                    <div className="h-2 rounded-2xl bg-gray-300 w-1/2"></div>
                                    <div className="bg-blue-900 px-3 py-2 rounded-xl text-white text-sm font-semibold">
                                        Create
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-4 w-full md:w-1/4 lg:bg-gray-50 md:bg-gray-50 rounded-2xl p-4 md:px-4">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
            </main>
        </div>
    );
}