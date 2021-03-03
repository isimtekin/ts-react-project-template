import React from 'react';
import globalHook, { Store } from 'use-global-hook';

type GlobalState = {
    loading: Boolean;
};

type GlobalActions = {
    showLoading: () => void;
    hideLoading: () => void;
    toggleLoading: () => void;
};

const showLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ loading: true });
};

const hideLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ loading: false });
};

const toggleLoading = (store: Store<GlobalState, GlobalActions>) => {
    store.setState({ loading: !store.state.loading });
};

const initialState: GlobalState = {
    loading: false,
};

const actions = {
    showLoading,
    hideLoading,
    toggleLoading,
};

export const useGlobalState = globalHook<GlobalState, GlobalActions>(
    React,
    initialState,
    actions
);
