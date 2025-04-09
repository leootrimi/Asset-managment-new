import React from "react";
import BackgroundImagePolygon from "./BackgroundImagePolygon";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function StatsHeader({ stats }) {
    return (
        <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                {stats.map((stat, statIdx) => (
                    <div
                        key={stat.name}
                        className={classNames(
                            statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                            'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-5 sm:px-6 lg:border-t-0 xl:px-8',
                        )}
                    >
                        <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
                        <dd
                            className={classNames(
                                stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                                'text-xs font-medium',
                            )}
                        >
                            {stat.change}
                        </dd>
                        <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>
            {/* Background image */}
                <BackgroundImagePolygon />
        </div>

    );
}