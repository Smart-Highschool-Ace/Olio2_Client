import * as I from "../../../../Assets/index";
import * as S from "./styled";

interface ParticipantsProps {
  state: string;
}

const Participants: React.FC<ParticipantsProps> = (
  props: ParticipantsProps
) => {
  return (
    <>
      <S.ParticipantAdd>
        <div>참여자</div>
        {
          {
            edit: (
              <S.SearchBar>
                <div>
                  <I.Search />
                  <input type="text" placeholder="검색" />
                </div>
                <textarea placeholder="맡은 역할" />
                <button id="addBtn">추가</button>
              </S.SearchBar>
            ),
          }[props.state]
        }
      </S.ParticipantAdd>
      <S.Participants>
        {
          {
            view: (
              <>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3308 />
                  <div>
                    <div>3308 김아련</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3111 />
                  <div>
                    <div>3111 이대훈</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
              </>
            ),
            viewOnly: (
              <>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3308 />
                  <div>
                    <div>3308 김아련</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3111 />
                  <div>
                    <div>3111 이대훈</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
              </>
            ),
            edit: (
              <>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <div>
                      <I.X />
                    </div>
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <div>
                      <I.X />
                    </div>
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <div>
                      <I.X />
                    </div>
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <div>
                      <I.X />
                    </div>
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <div>
                      <I.X />
                    </div>
                  </div>
                </button>
              </>
            ),
            writing: (
              <>
                <S.Participants>
                  <div>
              <S.SearchBar>
                <div>
                  <I.Search />
                  <input type="text" placeholder="검색" />
                </div>
                <textarea placeholder="맡은 역할" />
                <button id="addBtn">추가</button>
              </S.SearchBar>
                  </div>
                  <div className="participantsGroup">
                    <button>
                      <I.Profile3218 />
                      <div>
                        <div>3218 진예원</div>
                        <span>기획 및 UI/UX 디자인</span>
                        <div>
                          <I.X />
                        </div>
                      </div>
                    </button>
                  </div>
                </S.Participants>
              </>
            ),
          }[props.state]
        }
      </S.Participants>
    </>
  );
};

export default Participants;
