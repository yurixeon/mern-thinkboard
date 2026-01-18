import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-[#181017] border-b border-base-content/100">
            <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-[#db924b] font-mono tracking-tight">ThinkBoard</h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn bnt-primary">
                            <PlusIcon className="size-5"/>
                            <span>New Note</span>
                        </Link>
                    </div>
                    </div>
                </div>
        </header>
    );
};
export default Navbar