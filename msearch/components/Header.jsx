import ButtonLogin from "./ButtonLogin"

export default function Header() {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
                <div className="text-2xl font-bold text-gray-900">
                    Movie Search
                </div>
                <div className="space-x-5 max-md:hidden">
                    <a className="text-gray-600 hover:text-gray-900"  href="">Pricing</a>
                    <a  className="text-gray-600 hover:text-gray-900" href="">FAQ</a>
                </div>
                <div>
                    <ButtonLogin />
                </div>
            </div>
        </section>
    )
}