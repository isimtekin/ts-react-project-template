import { Dropdown as AntdDropdown, Menu } from 'antd';
import 'antd/es/dropdown/style/index.css';

interface DropdownOption {
    label?: string | JSX.Element;
    icon?: string | JSX.Element;
    disabled?: boolean;
    key: string;
}

export interface DropdownProps {
    children: JSX.Element;
    options: DropdownOption[];
    onSelect?: (key: any) => void;
}

export function Dropdown({ options, children, onSelect }: DropdownProps) {
    const renderOptions = () => {
        return (
            <Menu>
                {options.map((option) => (
                    <Menu.Item
                        onClick={() => {
                            if (onSelect) {
                                onSelect(option.key);
                            }
                        }}
                        key={option.key}
                        icon={option.icon}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </Menu.Item>
                ))}
            </Menu>
        );
    };
    return (
        <AntdDropdown overlay={renderOptions()}>
            <span>{children}</span>
        </AntdDropdown>
    );
}
