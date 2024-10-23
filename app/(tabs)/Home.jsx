import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getPopularMovieList,
  getTopRatedMovieList,
  getTrendingMovieList,
  getUpcomingMovieList,
} from "../Apis/MovieApi";
import Listcomponent from "../../components/Listcomponent";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // Fetch trending movies
  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await getTrendingMovieList();
      setTrendingMovies(movieList); // Update state with trending movies
    };

    fetchMovies();
  }, []);

  // Fetch popular movies
  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await getPopularMovieList();
      setPopularMovies(movieList); // Update state with popular movies
    };

    fetchMovies();
  }, []);

  // Fetch top-rated movies
  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await getTopRatedMovieList();
      setTopRatedMovies(movieList); // Update state with top-rated movies
    };

    fetchMovies();
  }, []);

  // Fetch upcoming movies
  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await getUpcomingMovieList();
      setUpcomingMovies(movieList); // Update state with upcoming movies
    };

    fetchMovies();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white px-4 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-7">
          <Text className="font-psemibold text-primary text-3xl text-center">
            My Movies
          </Text>
        </View>
        <View className="mt-2 mb-4">
          <Listcomponent movies={trendingMovies} heading="Trending" />
          <Listcomponent movies={popularMovies} heading="Polular" />
          <Listcomponent movies={topRatedMovies} heading="Top Rated" />
          <Listcomponent movies={upcomingMovies} heading="Upcomings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
