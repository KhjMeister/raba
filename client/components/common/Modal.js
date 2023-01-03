import React from 'react';

const Modal = () => {
    return (
        <>
            <div className="hidden bg-zinc-900/50 z-50 fixed right-0 left-0 top-0 bottom-0 m-auto" id="modal_login">
                <div className="absolute  top-0 bottom-0 right-0 left-0  m-auto h-[27rem] max-w-full min-w-min max-w-sm ">
                    <div className="bg-[#f5f5f5] mx-4 py-6 rounded-md">
                        <div className="flex justify-between mx-4 ">
                            <img src="../jpg/raba2.png" className="h-12" />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="align-middle my-auto cursor-pointer" id="close">
                                <path d="M4 20L20.022 4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M20.022 20L4 4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="mx-4">
                            <h3 className="text-sm font-bold mt-6">ورود به حساب کاربری</h3>
                            <button type="submit"
                                className="text-sm mt-6 w-full py-2.5 text-center rounded border border-1 border-zinc-700 hover:bg-zinc-700 hover:text-white">
                                <img src="../jpg/google.png" className=" ml-2 w-5 h-5 inline-block" />
                                ورود با حساب Google
                            </button>
                            <p className="block my-4 text-sm text-center">یا</p>
                            <form>
                                <div>
                                    <label className="text-sm mb-2 block">شماره تلفن</label>
                                    <input type="text"
                                        className="text-sm placeholder:text-xs text-zinc-700 rounded px-3 py-3 w-full focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                                        placeholder="شماره تلفن خود را وارد نمایید" />
                                </div>
                                <button type="submit"
                                    className="text-sm text-center bg-[#4F66E8] mt-5 w-full p-3 rounded text-white hover:bg-[#8993FF]">ورود</button>
                                <div className="text-xs mt-4 text-zinc-400 inline-block">
                                    ثبت نام در کافه ایران به منزله موافقت با
                                <p className="text-sky-500 inline-block text-xs mr-1">قوانین</p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
