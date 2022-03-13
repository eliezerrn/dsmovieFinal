package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.Entities.Score;
import com.devsuperior.dsmovie.Entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
