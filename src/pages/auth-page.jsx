import {AuthForm} from "../components/auth-form"

const AuthPage = ({type="login"}) => {

    return (
    <section className="h-screen w-full flex items-center justify-center p-8">
        <AuthForm type={type} />
    </section>
    )

}

export default AuthPage