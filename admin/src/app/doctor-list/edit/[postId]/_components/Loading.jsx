import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen z-50">
                <div className="relative">
                    <div className="relative w-32 h-32">
                        <div
                            className="absolute w-full h-full rounded-full border-[3px] border-gray/10 border-r-blue border-b-blue animate-spin"
                            style={{ animationDuration: "3s" }}
                        />
                        <div
                            className="absolute w-full h-full rounded-full border-[3px] border-gray/10 border-t-blue animate-spin"
                            style={{ animationDuration: "2s", animationDirection: "reverse" }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue/10 via-transparent to-blue/5 animate-pulse rounded-full blur-sm" />
                </div>
            </div>
        </>

    );
}

export default Loading;
