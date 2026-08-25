import { useState } from "react"

export function LoginForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.currentTarget
        const submitBtn = form.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent

        const formData = new FormData(form)
        formData.append("access_key", "d01b5a9d-5540-4b71-9751-e9de82d652ad")

        submitBtn.textContent = "Sending..."
        submitBtn.disabled = true

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                alert("Success! Your message has been sent.")
                setName("")
                setEmail("")
                setMessage("")
            } else {
                alert("Error: " + data.message)
            }
        } catch (error) {
            alert("Something went wrong. Please try again.")
        } finally {
            submitBtn.textContent = originalText
            submitBtn.disabled = false
        }
    }

    return (
        <div className="relative w-[450px] max-w-full rounded-2xl p-px overflow-hidden">
            {/* Animated border beam */}
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#5822c5_50%,transparent_100%)]" />

            {/* Card body */}
            <div className="relative rounded-2xl bg-[#12131a] text-white shadow-xl">
                <div className="p-6 space-y-1.5">
                    <h3 className="text-2xl font-semibold">Contact Me</h3>
                    <p className="text-sm text-gray-400">
                        Send a message and I'll get back to you soon.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 pt-0 grid gap-4">
                    <div className="grid gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="h-10 rounded-lg border border-gray-700 bg-transparent px-3 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-green-500"
                        />
                    </div>

                    <div className="grid gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-10 rounded-lg border border-gray-700 bg-transparent px-3 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-green-500"
                        />
                    </div>

                    <div className="grid gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            className="rounded-lg border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-500 focus:border-green-500 resize-none"
                        />
                    </div>

                    <div className="flex justify-end pt-2">
                        <button
                            type="submit"
                            disabled={false}
                            className="h-10 px-6 rounded-lg bg-green-600 text-white text-sm font-medium transition-colors hover:bg-green-500 disabled:opacity-50 disabled:hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
