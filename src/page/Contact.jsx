import facebook from '../assets/icon socail/Facebook_f_logo_(2021).svg.webp'
import github from '../assets/icon socail/github-logo-png_seeklogo-304612.png'
import google from '../assets/icon socail/google-logo-transparent-background-free-png.webp'
import telegram from '../assets/icon socail/Telegram_logo.svg.webp'
import { LoginForm } from '../assets/LoginForm'

function Contact() {

    const icon = [
        {
            id: 1,
            image: facebook,
            title: 'Like me on Facebook',
            link: 'https://www.facebook.com/Menghiengjr22.grea'
        },
        {
            id: 2,
            image: telegram,
            title: 'Contact on Telegram',
            link: 'https://t.me/Pak_Menghieng'
        },
        {
            id: 3,
            image: github,
            title: 'Follow on GitHub',
            link: 'https://github.com/mengHiengpak'
        },
        {
            id: 4,
            image: google,
            title: 'Email me on Gmail',
            link: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkvkrRkJJhxqwrJnqBZmfkVFhTnSWzxGvNNshrsfQpwzShlWFxBZLdPwVlhlzrQLFFL'
        },
    ]

    return (
        <section id="contact" className="relative min-h-screen overflow-hidden scroll-mt-16 bg-[#0b0d17]">
            <div className="relative z-10 pt-24 pb-10 px-6 md:px-12 text-white">
                <h2 className="text-4xl md:pl-15 pl-1 pb-5">Contact Me</h2>
                <p className="max-w-xl md:pl-15 pl-1 pb-10 text-gray-400">
                    Whether you have a project in mind, a job opportunity, or just want to connect
                    over clean architecture and modern web tech, my inbox is always open.
                </p>


                <div className='flex flex-col lg:flex-row gap-15 items-center justify-center'>

                <div className="flex-1 w-full max-w-3xl grid grid-cols-1 gap-6">
                    {icon.map((i) => (
                        <a
                        key={i.id}
                        href={i.link}
                        target="_blank"
                        rel="noreferrer"
                            className="flex items-center gap-5 bg-[#12131a] border border-gray-800 rounded-3xl p-6 shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02]"
                        >
                            <img src={i.image} alt={i.title} className='w-15 h-15' />
                            <span className='font-medium'>{i.title}</span>
                        </a>
                    ))}
                </div>

                <div className='w-full lg:w-auto lg:sticky lg:top-24'>
                    <LoginForm />
                </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
