import { Layout } from "./Layout";

export const Footer = () => {
    return (
        <footer className="w-full sm:text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light text-base">
            <Layout className="flex items-center justify-center flex-col lg:!py-8 lg:flex-row !py-6">
                {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved</span> */}
                <div className="flex items-center lg:py-2">
                    © {new Date().getFullYear()} Mukarram Shafqat
                </div>
            </Layout>
        </footer>
    );
};
