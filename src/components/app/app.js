import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    const data = [
        { label: 'Going to learn React', important: true, id: 'qwe' },
        { label: 'Going to learn React', important: true, id: 'sdffd' },
        { label: 'That is so good and tasty', important: false, id: 'jdfjh' },
        { label: 'I need you feedback...', important: false, id: 'ewfdf' },
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="searc-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    );
};

export default App;
