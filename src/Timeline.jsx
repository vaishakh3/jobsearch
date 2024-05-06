import React, { useState, useEffect } from 'react';

const Timeline = ({ searchQuery }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);

    const jobs = [
      {
          companyName: 'Google',
          jobTitle: 'Software Engineer',
          location: 'Mountain View, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
          website: 'https://careers.google.com/'
      },
      {
          companyName: 'Apple',
          jobTitle: 'iOS Developer',
          location: 'Cupertino, CA',
          logo: 'https://banner2.cleanpng.com/20180315/wee/kisspng-apple-logo-business-clip-art-apple-logo-outline-5aaafe77583254.0626784515211557033613.jpg',
          website: 'https://www.apple.com/jobs/'
      },
      {
          companyName: 'Microsoft',
          jobTitle: 'Data Analyst',
          location: 'Redmond, WA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
          website: 'https://careers.microsoft.com/'
      },
      {
          companyName: 'Amazon',
          jobTitle: 'Cloud Solutions Architect',
          location: 'Seattle, WA',
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
          website: 'https://www.amazon.jobs/'
      },
      {
          companyName: 'Facebook',
          jobTitle: 'Frontend Developer',
          location: 'Menlo Park, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
          website: 'https://www.facebook.com/careers/'
      },
      {
          companyName: 'Netflix',
          jobTitle: 'Content Strategist',
          location: 'Los Gatos, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
          website: 'https://jobs.netflix.com/'
      },
      {
          companyName: 'Tesla',
          jobTitle: 'Hardware Engineer',
          location: 'Palo Alto, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
          website: 'https://www.tesla.com/careers/'
      },
      {
          companyName: 'LinkedIn',
          jobTitle: 'Backend Developer',
          location: 'Sunnyvale, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
          website: 'https://careers.linkedin.com/'
      },
      {
          companyName: 'X Corp.',
          jobTitle: 'Social Media Manager',
          location: 'San Francisco, CA',
          logo: 'https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714953600&semt=ais',
          website: 'https://www.x.com/careers/'
      },
      {
          companyName: 'Adobe',
          jobTitle: 'UX Designer',
          location: 'San Jose, CA',
          logo: 'https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png',
          website: 'https://www.adobe.com/careers.html'
      },
      {
          companyName: 'Uber',
          jobTitle: 'Product Manager',
          location: 'San Francisco, CA',
          logo: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/Uberlogo-20180925091408171.jpg',
          website: 'https://www.uber.com/us/en/careers/'
      },
      {
          companyName: 'Airbnb',
          jobTitle: 'Senior Software Engineer',
          location: 'San Francisco, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
          website: 'https://www.airbnb.com/careers/'
      },
      {
          companyName: 'IBM',
          jobTitle: 'AI Engineer',
          location: 'Armonk, NY',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
          website: 'https://www.ibm.com/employment/'
      },
      {
          companyName: 'Salesforce',
          jobTitle: 'Technical Architect',
          location: 'San Francisco, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
          website: 'https://www.salesforce.com/company/careers/'
      },
      {
          companyName: 'Oracle',
          jobTitle: 'Database Administrator',
          location: 'Redwood City, CA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
          website: 'https://www.oracle.com/corporate/careers/'
      },
      {
          companyName: 'Walmart',
          jobTitle: 'Supply Chain Analyst',
          location: 'Bentonville, AR',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
          website: 'https://careers.walmart.com/'
      },
      {
          companyName: 'Boeing',
          jobTitle: 'Aerospace Engineer',
          location: 'Chicago, IL',
          logo: 'https://i.pinimg.com/originals/67/37/2d/67372ddd0e155177432307582924b1f4.png',
          website: 'https://jobs.boeing.com/'
      },
      {
          companyName: 'Lockheed Martin',
          jobTitle: 'Systems Engineer',
          location: 'Bethesda, MD',
          logo: 'https://1000logos.net/wp-content/uploads/2020/04/Lockheed-Martin-Logo.png',
          website: 'https://www.lockheedmartinjobs.com/'
      },
      {
          companyName: 'Coca-Cola',
          jobTitle: 'Marketing Manager',
          location: 'Atlanta, GA',
          logo: 'https://static.vecteezy.com/system/resources/previews/014/414/677/non_2x/coca-cola-logo-on-transparent-background-free-vector.jpg',
          website: 'https://www.coca-colacompany.com/careers'
      },
      {
          companyName: 'McDonald\'s',
          jobTitle: 'Restaurant Manager',
          location: 'Chicago, IL',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg',
          website: 'https://careers.mcdonalds.com/us'
      },
      {
        companyName: 'Nike',
        jobTitle: 'Product Designer',
        location: 'Beaverton, OR',
        logo: 'https://img.etimg.com/thumb/msid-59738997,width-480,height-360,imgsize-21421,resizemode-75/nike.jpg',
        website: 'https://jobs.nike.com/'
      },
      {
          companyName: 'PepsiCo',
          jobTitle: 'Finance Analyst',
          location: 'Purchase, NY',
          logo: 'https://i.pinimg.com/originals/e1/05/d7/e105d7fa53f28b0f21d08ac19f63edd9.png',
          website: 'https://www.pepsicojobs.com/'
      },
      {
          companyName: 'General Electric',
          jobTitle: 'Electrical Engineer',
          location: 'Boston, MA',
          logo: 'https://logos-world.net/wp-content/uploads/2021/08/GE-Symbol.png',
          website: 'https://jobs.gecareers.com/'
      },
      {
          companyName: 'Ford',
          jobTitle: 'Mechanical Engineer',
          location: 'Dearborn, MI',
          logo: 'https://logos-world.net/wp-content/uploads/2021/05/Ford-Logo.png',
          website: 'https://corporate.ford.com/careers.html'
      },
      {
          companyName: 'General Motors',
          jobTitle: 'Automotive Technician',
          location: 'Detroit, MI',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/General_Motors_%282021%29.svg/2048px-General_Motors_%282021%29.svg.png',
          website: 'https://search-careers.gm.com/'
      },
      {
          companyName: 'Nestle',
          jobTitle: 'Supply Chain Manager',
          location: 'Vevey, Switzerland',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/640px-Nestl%C3%A9.svg.png',
          website: 'https://www.nestle.com/jobs'
      },
      {
          companyName: 'Sony',
          jobTitle: 'UX Researcher',
          location: 'Tokyo, Japan',
          logo: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
          website: 'https://www.sony.com/corporate/careers.html'
      },
      {
          companyName: 'Samsung',
          jobTitle: 'Software Developer',
          location: 'Seoul, South Korea',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
          website: 'https://www.samsung.com/us/careers/'
      },
  ];

  useEffect(() => {
    // Filter jobs based on search query
    const filtered = jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(searchQuery.jobRole.toLowerCase()) &&
      job.location.toLowerCase().includes(searchQuery.location.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Jobs list */}
          {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <img src={job.logo} alt={`${job.companyName} Logo`} className="w-16 h-16" />
                  <div>
                    <div>{job.companyName}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {job.jobTitle}
                <br />
                <span className="badge badge-ghost badge-sm">{job.location}</span>
              </td>
              <td>{job.location}</td>
              <td>
                <a href={job.website} target="_blank" className="btn btn-ghost btn-xs">details</a>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Location</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Timeline;