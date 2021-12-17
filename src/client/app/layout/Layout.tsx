import s from './Layout.module.scss';
import {FunctionComponent} from "react";
import {LayoutProps} from "./Layout.props";
import {Main} from "@/layout/Main/Main";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Main className={s.main}>{children}</Main>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout><Component {...props}/></Layout>
        )
    }
}