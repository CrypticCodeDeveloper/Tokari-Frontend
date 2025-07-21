import { Outlet } from "react-router-dom"

const BaseLayout = () => {

    return (
        <div className="w-full">
            <Outlet />
        </div>
    )
}

export default BaseLayout