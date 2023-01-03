import Museum from "../models/Museum.js"

export const getArtworks = async (req, res) => {
  try {
    const museum = await Museum.find();
    res.json(museum)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const artwork = await Museum.findById(id);

    if (artwork) {
      return res.json(artwork);
    }
    
    res.status(404).json ({ message: "Artwork not found!" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const createArtwork = async (req, res) => {
  try {
    const artwork = new Museum(req.body);
    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const updateArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const artwork = await Museum.findByIdAndUpdate(id, req.body);
    res.status(201).json(artwork);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Museum.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Artwork deleted!");
    }

    throw new Error("Artwork not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}