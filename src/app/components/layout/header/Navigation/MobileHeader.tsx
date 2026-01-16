

import Link from 'next/link';

const MobileHeader: React.FC<{ item: any }> = ({ item }) => {

    return (
        <>
            <Link href={item.href} className="text-black dark:text-white rounded-md text-sm font-medium ">
                <li className={`rounded-md w-full p-2 px-3`}>
                    {item.label}
                </li>
            </Link>
        </>
    );
};

export default MobileHeader;
