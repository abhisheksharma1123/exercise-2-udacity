import React, { Component } from 'react'


class MovieCard extends Component {
  render() {
    const { movie, usersWhoLikeThisMovie } = this.props
    return (
      <div>
        <h2><u>{movie.name}</u></h2>

        {!usersWhoLikeThisMovie || usersWhoLikeThisMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
         
        ) : (
          <React.Fragment>
         <p><strong>Liked By:</strong></p>
          <ul>
            {usersWhoLikeThisMovie &&
              usersWhoLikeThisMovie.map(u => 
                  <li key={u.id}>
                    <p>{u.name}</p>
                  </li>
             )}
          </ul>
		</React.Fragment>
        )}
      </div>
	)
  }
}

export default MovieCard