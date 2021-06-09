import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';
import image from './components/youtube-logo-png-46031.png';
class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('Artificial Intelligence in education')
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }
    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', {
            params: { 
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCtG_pTqxa-FH8qb4cUIle7OxuvrU7R53w',
                q: searchTerm,
            }
        
        });
        console.log(response.data.items)
        this.setState({video: response.data.items, selectedVideo: response.data.items[0]})
    }
    render() {
        const { selectedVideo, video} = this.state
        return(
            <Grid style={{justifyContent:"center"}} container spacing={10}>
                <Grid item xs={12}>
                <img src={image} alt="YouTube Logo" style={{width: "50px", padding: "2px"}}/>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                             <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos = {video} onVideoSelect = {this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;