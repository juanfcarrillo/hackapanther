import NavBar from "@/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col max-h-full ">
            <div>
                <NavBar />
            </div>
            {children}
        </main>
    )
}