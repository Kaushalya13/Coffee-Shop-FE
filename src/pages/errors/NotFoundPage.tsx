const NotFoundPage = () => {
    return (
        <div className="h-screen">
            {/* Upper half with centered image */}
            <div className="bg-white h-1/2 w-full flex justify-center items-start relative">
                <img src="src/assets/pic.png" alt="Not Found" className="w-140 h-140 object-cover absolute top-23" />
                <img src="src/assets/4.png" alt="Not Found" className="object-cover absolute left-50 top-22" />
                <img src="src/assets/4.png" alt="Not Found" className="object-cover absolute right-50 top-22" />
            </div>

            {/* Lower half with black background */}
            <div className="h-1/2 w-full bg-black flex items-end justify-center p-4">
                <h3 className="text-white text-lg">Sorry. No coffee - no work</h3>
            </div>

        </div>
    );
}

export default NotFoundPage;
