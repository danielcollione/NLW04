import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/surveyuser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository };
