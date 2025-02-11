export default function Container({ children }) {
    return (
        <div className="p-5 font-inter font-bold bg-[#313030] bg-opacity-40 rounded-2xl">
            {children}
        </div>
    );
}
