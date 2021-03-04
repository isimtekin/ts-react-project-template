import React, { useEffect } from 'react';
import globalHook, { Store } from 'use-global-hook';

type GlobalState = {
    pageTitle: string;
    loading: Boolean;
};

type GlobalActions = {
    showLoading: () => void;
    hideLoading: () => void;
    toggleLoading: () => void;
    setPageTitle: (title: string) => void;
};

const showLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ ...store.state, loading: true });
};

const hideLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ ...store.state, loading: false });
};

const toggleLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ ...store.state, loading: !store.state.loading });
};

const setPageTitle = (
    store: Store<GlobalState, GlobalActions>,
    pageTitle: string
) => {
    store.setState({ ...store.state, pageTitle });
};

const initialState: GlobalState = {
    pageTitle: 'EI TS Project Template',
    loading: false,
};

const actions = {
    showLoading,
    hideLoading,
    toggleLoading,
    setPageTitle,
};

export const useGlobalState = globalHook<GlobalState, GlobalActions>(
    React,
    initialState,
    actions
);

export default function usePageTitle(title: string): string {
    const [, actions] = useGlobalState();
    useEffect(() => {
        actions.setPageTitle(title);
    }, []);

    return title;
}
