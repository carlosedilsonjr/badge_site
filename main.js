const LinksSocialMedia = {
  github: 'carlosedilsonjr',
  rocketseat: 'carlosedilsonjr',
  linkedin: 'carlosedilsonjr',
  instagram: 'carlosedilsonjr',
  twitter: 'carlosedilsonjr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    let linkedin =
      social == 'linkedin' ? '/in/' : social == 'rocketseat' ? '.br/me/' : '/'
    let rocketseat = social == 'rocketseat' ? 'app.' : '/'
    li.children[0].href = `https://${rocketseat}${social}.com${linkedin}${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
