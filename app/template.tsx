export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <main className="page-enter mx-auto max-w-[85%] flex-1 md:max-w-full">
            {children}
        </main>
    );
}
