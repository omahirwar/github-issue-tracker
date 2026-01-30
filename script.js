document.addEventListener('DOMContentLoaded', () => {
    const issueContainer = document.getElementById('issue-container');

    // GitHub Repository Details (CHANGE THESE!)
    const owner = 'YOUR_GITHUB_USERNAME'; // अपना GitHub यूजरनेम यहाँ डालें
    const repo = 'YOUR_REPOSITORY_NAME'; // अपनी रिपॉजिटरी का नाम यहाँ डालें
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

    // Fetch Issues from GitHub API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(issues => {
            issues.forEach(issue => {
                const issueDiv = document.createElement('div');
                issueDiv.classList.add('issue');

                issueDiv.innerHTML = `
                    <h2>${issue.title}</h2>
                    <p>${issue.body.substring(0, 100)}...</p>
                    <a href="${issue.html_url}" target="_blank">View on GitHub</a>
                `;

                issueContainer.appendChild(issueDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching issues:', error);
            issueContainer.innerHTML = '<p>Error fetching issues. Please check the console.</p>';
        });
});
