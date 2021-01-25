import React from "react";
import Spinner from './Spinner';

interface LoadingProps {
    loading: boolean,
    children: any
}

const Loading: React.FC<LoadingProps> = ({loading, children}) => {
    return (
        loading ? <Spinner/> : <>{children}</>
    )
}

export default Loading;
