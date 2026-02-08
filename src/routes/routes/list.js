import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegion, getRoutesBySeason, getRoutesByRegionAndSeason } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes;
    const seasons = await getListOfSeasons();

    const filterByRegion = regions.includes(req.query.region) ? req.query.region : 'All Regions';
    const filterBySeason = seasons.includes(req.query.season) ? req.query.season : 'Any Season';

    if (filterByRegion != 'All Regions' && filterBySeason != 'Any Season') {
        routes = await getRoutesByRegionAndSeason(filterByRegion, filterBySeason);
    }
    
    else if (filterByRegion != 'All Regions') {
        routes = await getRoutesByRegion(filterByRegion);
    }
    
    else if (filterBySeason != 'Any Season') {
        routes = await getRoutesBySeason(filterBySeason);
    }

    else {
        routes = await getAllRoutes();
    }

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        message: `There are no routes in the ${req.query.region} region that are best during ${req.query.season}.`
    });
};