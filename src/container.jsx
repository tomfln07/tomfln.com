export default function Container({ children }) {
    return (
        <div className="p-5 font-inter font-bold bg-[#313030] max-sm:relative max-sm:left-1/2 max-sm:translate-x-[-50%] bg-opacity-40 rounded-2xl w-[260px] min-w-[260px]">
            {children}
        </div>
    );
}
