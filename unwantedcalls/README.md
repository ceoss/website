# Unwanted Calls
> As of 5/23/16, the FCC will no longer make unwanted call data available through this link.  The FCC has launched an improved data center platform that allows the public to download this and other data in numerous formats.  The platform also allows the public to pull data via an application program interface (API).  The data center can be accessed via: https://www.fcc.gov/consumer-help-center-data

>\- The CSV File from 5/25/16

## Description:
>This data is for unwanted calls (telemarketing or robocalls). Individual informal consumer complaint data detailing complaints filed with the Consumer Help Center beginning October 31, 2014. This data represents information selected by the consumer. The FCC does not verify the facts alleged in these complaints.

>\- The FCC's Description of Their Database

Unwanted Calls was a program and interface to the FCC's unwanted callers list before they switched to an [API](https://dev.socrata.com/foundry/opendata.fcc.gov/sr6c-syda) (horay!) on 5/23/16. The plan was to develop this into an API since they wern't at the time, but this project was developed slowly because there wasn't projects planned using this and became a side project instead.

If there was a need for a secondary interface / API it would be better to use the API or download the new CSVs from the new link (no more download page to find it anymore) or the JSON file from the client but alas it sleeps.

## Code Explanation:
1. `bash.sh` ran daily as a cronjob downloading the FCC's page to find the CSV link, then downloaded it and archived the old files.
2. `data.csv` was served and downloaded by `papaparse.js` to convert to JSON (inefficient, should've been done server side).
3. Inside of `index.html` are JavaScript functions that use the JSON to create table rows and to search them (was a WIP).

## FCC's New System:
- [API Docs](https://dev.socrata.com/foundry/opendata.fcc.gov/sr6c-syda)
- [Interface](https://opendata.fcc.gov/Consumer-and-Government-Affairs/Consumer-Complaints-Data-Unwanted-Calls/vakf-fz8e)
- [Odata Endpoint](https://opendata.fcc.gov/OData.svc/vakf-fz8e)
- [CSV Download](https://opendata.fcc.gov/api/views/vakf-fz8e/rows.csv?accessType=DOWNLOAD)
- [JSON Download](https://opendata.fcc.gov/api/views/vakf-fz8e/rows.json?accessType=DOWNLOAD)

More information can be found in the interface's `Export` sidebar.
