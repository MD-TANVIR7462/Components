import React from 'react';

const Spiner = () => {
    return (
        <div>
            <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="flex flex-col">
        <div class="flex space-x-24">
            <!-- Regular Spinners -->
            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Regular Spinners
                </h1>

                <!-- Open Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Open Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <!-- Close Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <!-- Closed Ring Spinner s1 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-solid border-yellow-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s2 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-solid border-blue-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s4 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s8 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-purple-500 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Edge X Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge X Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-solid border-yellow-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-solid border-blue-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-solid border-green-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <!-- Edge Y Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge Y Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-solid border-yellow-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-solid border-blue-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-solid border-green-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>
            </div>

            <!-- Dashed Spinners -->
            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Dashed Spinners
                </h1>

                <!-- Open Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Open Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-dashed border-yellow-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-dashed border-green-500 border-t-transparent"></div>

                        <!-- Open Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <!-- Close Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <!-- Closed Ring Spinner s1 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border border-dashed border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-dashed border-yellow-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s2 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-dashed border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-dashed border-blue-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s4 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-green-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s8 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-dashed border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-purple-500 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Edge X Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge X Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-dashed border-yellow-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-dashed border-green-500 border-t-transparent"></div>

                        <!-- Edge X Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <!-- Edge Y Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge Y Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-dashed border-yellow-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-dashed border-green-500 border-t-transparent"></div>

                        <!-- Edge Y Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>
            </div>

            <!-- Spinners With Shadow -->
            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Spinners With Shadow
                </h1>

                <!-- Open Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Open Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <!-- Open Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <!-- Open Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <!-- Open Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>

                <!-- Close Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <!-- Closed Ring Spinner s1 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-solid border-yellow-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s2 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s4 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <!-- Closed Ring Spinner s8 -->
                        <div class="flex">
                            <div class="relative">
                                <!-- Outer Ring-->
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200"></div>

                                <!-- Inner Ring -->
                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Edge X Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge X Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <!-- Edge X Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <!-- Edge X Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <!-- Edge X Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>

                <!-- Edge Y Ring Examples -->
                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <!-- Edge Y Ring Spinner s1 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <!-- Edge Y Ring Spinner s2 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <!-- Edge Y Ring Spinner s4 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <!-- Edge Y Ring Spinner s8 -->
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Spiner;