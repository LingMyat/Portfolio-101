export default function SocialLink() {
    const socialLinks = [
        {
            title: 'Github',
            url  : 'https://github.com/lingmyat',
            svg  : `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" clip-rule="evenodd"/></svg>
            `
        },
        {
            title: 'LinkedIn',
            url  : 'https://www.linkedin.com/in/ling-myat-aung-144271253',
            svg  : `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>
            `
        },
        {
            title: 'CVForm',
            url  : '/Ling-Myat-Aung.pdf',
            svg  : `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M128 192h256v32H128zm0 112h128v32H128z"/><path fill="currentColor" d="M48 432h416V88H48Zm32-312h352v280H80Z"/></svg>
            `
        }
    ];
    return (
        <div className="mb-5 flex gap-3">
            {
                socialLinks.map((link) => (
                    <a 
                    key={link.title}
                    href={link.url}
                    target="_blank" 
                    class="relative inline-flex items-center justify-start w-[6rem] py-[0.4rem] overflow-hidden font-medium transition-all bg-[#2E2E34] rounded-sm hover:bg-[#2E2E34] group"
                    >
                        <span 
                        class="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-[-3.5%] -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                        ></span>
                        <span 
                        class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black flex justify-center gap-1 items-center rounded text-xs"
                        >
                            <span dangerouslySetInnerHTML={{__html: link.svg}}></span>
                            <span className="font-semibold">{link.title}</span>
                        </span>
                    </a>
                ))
            }
        </div>
    )
}