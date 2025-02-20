const BackendIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                {/*<div className="bg-[url(/assets/api.png)]"></div>*/}
                <img alt="linkedin-link" className='inline-block rounded-lg bg-grey p-2' src="assets/api.png" />
            </a>
            {/*<a*/}
            {/*    className="hover:opacity-50 transition duration-500"*/}
            {/*    href="https://www.twitter.com"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*>*/}
            {/*    <img alt="twitter-link" src="../assets/asp.png" />*/}
            {/*</a>*/}
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook-link" className='inline-block rounded-lg bg-grey p-2' src="assets/expressjs.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" className='inline-block rounded-lg bg-grey p-2' src="assets/postgre.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" className='inline-block rounded-lg bg-grey p-2' src="assets/sql.png" />
            </a>

        </div>
    );
};

export default BackendIcons;
