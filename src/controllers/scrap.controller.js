import { first5Duck, first5Google, scrapFromDuck, scrapListFromDuck } from "../helpers/scraping.js";



export async function getImages(req, res) {
  try {
    const { name } = req.query;
    const urlList = await first5Duck(name)
    res.json(urlList);
  } catch (error) {
    console.log(error);
    return res.status(500).json([]);
  }
}


export async function getImagesForList(req, res) {
  try {
    const listSearch = req.body;
    if (!listSearch?.length) {
      res.json([])
      return
    }
    const list = await scrapListFromDuck(listSearch)
    res.json(list);
  } catch (error) {
    return res.status(500).json([]);
  }
}