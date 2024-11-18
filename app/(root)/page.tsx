import React from 'react';
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';

const Home = async ({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) => {
    const query = (await searchParams).query;
    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: {
                _id: 1,
                name: 'John Doe',
            },
            _id: 1,
            description: 'Startup Description',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/seven-ways-to-think-of-startup-idea.jpg',
            category: 'Robots',
            title: 'Startup Title',
        },
    ];
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Connect With Investors
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit your startup idea and connect with investors.
                </p>
                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Results for "${query}"` : 'Trending Startups'}
                </p>
                <ul className="mt-7 card_grid">
                    {posts.length > 0 ? (
                        posts.map((post: StartupCartType) => (
                            <StartupCard key={post._id} post={post} />
                        ))
                    ) : (
                        <p className="no-result">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
};

export default Home;
