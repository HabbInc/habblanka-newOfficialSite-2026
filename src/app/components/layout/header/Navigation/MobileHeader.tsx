

import Link from 'next/link';

type MobileHeaderProps = {
    item: any;
    onNavigate?: () => void;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ item, onNavigate }) => {
    return (
        <>
            <Link
                href={item.href}
                className="text-black dark:text-white rounded-md text-sm font-medium "
                onClick={onNavigate}
            >
                <li className={`rounded-md w-full p-2 px-3`}>
                    {item.label}
                </li>
            </Link>
        </>
    );
};

export default MobileHeader;
