import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {Dialog, DialogPanel} from "@headlessui/react";

const navigation = [
    {name: 'products', to: 'products'},
    {name: 'Features', to: 'features'},
    {name: 'login', to: 'login'},
    // { name: 'Company', href: '#' },
]
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className=''>
            <nav aria-label="Global" className="flex justify-between lg:px-8 "
                 style={{paddingLeft: '2rem', paddingRight: '2rem', paddingTop: "0.5rem"}}>
                <div className="flex ml-4">
                    {
                        !mobileMenuOpen && (
                            <Link to="/" className="block p-2">
                                🛍️ Online Store
                            </Link>
                        )
                    }

                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-1000 ${mobileMenuOpen ? 'rotate-180' : ''}`}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true"
                                   className={`size-6 transition-transform ${mobileMenuOpen ? 'hidden' : ''}`}/>
                        <XMarkIcon aria-hidden="true"
                                   className={`size-6 transition-transform ${mobileMenuOpen ? 'block' : 'hidden'}`}/>
                    </button>
                </div>
                <div className="hidden lg:flex items-center">
                    <div className="flex lg:gap-x-12">
                        {navigation
                            .map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    // className="text-sm font-semibold text-gray-900 hover:text-gray-500">
                                    className="text-sm font-semibold text-gray-900 hover:text-gray-500">
                                    {item.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 p-2.5 lg:px-8 "/>
                <DialogPanel
                    className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-1000 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{paddingLeft: '2rem', paddingRight: '2rem', paddingTop: "1rem"}}
                >
                    <div className="flex items-center justify-between ">
                        <Link to="/" className="-m-1.5 p-1.5">
                            🛍️ Online Store
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
};

export default Navbar;

