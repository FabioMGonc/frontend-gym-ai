import { useNavigate } from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode
    to?: string
}

export default function Button({ children, to }: ButtonProps) {
    const navigate = useNavigate();
    function handleClick() {
        if (to) navigate(to)
    }

    return (
        <button 
        onClick= {handleClick}
        className="px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors">
            {children}
        </button>
    )
}