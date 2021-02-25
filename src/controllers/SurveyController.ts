import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveyRepository";

class SurveysController {
  async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const surveysRepos = getCustomRepository(SurveysRepository);

    const survey = surveysRepos.create({
      title,
      description,
    });

    await surveysRepos.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const surveysRepos = getCustomRepository(SurveysRepository);

    const all = await surveysRepos.find();

    return response.json(all);
  }
}

export { SurveysController };
